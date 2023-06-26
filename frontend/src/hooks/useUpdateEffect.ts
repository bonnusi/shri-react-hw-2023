import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
    const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return effect()
    }else {
        mounted.current = true;
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}