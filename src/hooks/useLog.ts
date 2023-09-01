import { useEffect } from 'react'

export function useLog(toLog: any) {
  useEffect(() => {
    console.log(toLog)
  }, [toLog])
}
