export function measureCSSLength(raw: string | undefined | null): number {
  if (raw === null || raw === undefined || raw === '') {
    return 0
  }
  const withUnit = raw.trim()
  if (withUnit.endsWith('px')) {
    return parseFloat(withUnit)
  } else if (withUnit.endsWith('rem')) {
    return (
      parseFloat(withUnit) *
      parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    )
  } else if (withUnit.endsWith('vw')) {
    return (parseFloat(withUnit) * window.innerWidth) / 100
  } else {
    return 0
  }
}
