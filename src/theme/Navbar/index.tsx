import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Toggle from "@theme/Toggle"
import { MainCTA } from "../../components/MainCTA"

import SearchBar from "@theme/SearchBar"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"

import styles from "./styles.module.css"
import NavbarItem from "@theme/NavbarItem"

import { useThemeConfig } from "@docusaurus/theme-common"
import useThemeContext from "@theme/hooks/useThemeContext"
import { usePluginData } from "@docusaurus/useGlobalData"
import { Release } from "../../utils"

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch },
  } = useThemeConfig()
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext()
  const toggle = (e: React.SyntheticEvent) =>
    (e.target as HTMLInputElement).checked ? setDarkTheme() : setLightTheme()

  return { isDarkTheme, toggle, disabled: disableSwitch }
}

function Navbar(): JSX.Element {
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items },
      },
    },
  } = useDocusaurusContext()
  const [sidebarShown, setSidebarShown] = useState(false)
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false)
  const location = useLocation()
  const windowSize = useWindowSize()
  const colorModeToggle = useColorModeToggle()
  const { release } = usePluginData<{ release: Release }>(
    "fetch-latest-release",
  )

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false)
    }
  }, [windowSize])

  useLockBodyScroll(sidebarShown)

  const showSidebar = () => setSidebarShown(true)
  const hideSidebar = () => setSidebarShown(false)

  return (
    <header
      className={clsx("navbar", styles.navbar, "navbar--light", {
        "navbar-sidebar--show": sidebarShown,
      })}
    >
      <div className={clsx("navbar__inner", styles.inner)}>
        <div className="navbar__items">
          <a className={clsx("navbar__brand", styles.brand)} href="/">
            QuestDB
          </a>
          {items.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>

        <div className="navbar__items navbar__items--right">
          <a
            href="https://github.com/questdb/questdb"
            aria-label="GitHub repository"
            className="navbar__item navbar__link header-github-link"
          >
            {release.name}
          </a>
          {!colorModeToggle.disabled && (
            <Toggle
              className={styles.themeToggleInHeading}
              checked={colorModeToggle.isDarkTheme}
              onChange={colorModeToggle.toggle}
            />
          )}
          <div className={styles.searchBar}>
            <SearchBar
              handleSearchBarToggle={setIsSearchBarExpanded}
              isSearchBarExpanded={isSearchBarExpanded}
            />
          </div>

          {!location.pathname.startsWith("/get-questdb") && <MainCTA />}

          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>An icon showing a hamburger menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />

      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <a
            className={clsx("navbar__brand", styles.brand)}
            href="/"
            onClick={hideSidebar}
          >
            QuestDB
          </a>

          {!colorModeToggle.disabled && (
            <Toggle
              className={styles.themeToggleInSidebar}
              checked={colorModeToggle.isDarkTheme}
              onChange={colorModeToggle.toggle}
            />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem
                  mobile
                  {...item}
                  {...(item.type !== "search" && { onClick: hideSidebar })} // Search type def does not accept onClick
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
