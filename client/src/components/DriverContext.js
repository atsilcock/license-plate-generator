import React, { createContext, useState, useEffect } from 'react'

export const DriverContext = createContext()

export const DriverProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([])
  const [licenseInfo, setLicenseInfo] = useState([])

  useEffect(() => {
    fetch("/drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data))
  }, [])

  useEffect(() => {
    fetch("/licenseinfo")
      .then((response) => response.json())
      .then((data) => setLicenseInfo(data))
  }, [])

  return (
    <DriverContext.Provider value={{ drivers, setDrivers, licenseInfo }}>
      {children}
    </DriverContext.Provider>
  )
}
