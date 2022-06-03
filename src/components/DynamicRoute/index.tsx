import React, { lazy, memo, Suspense, FC } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Loader'

type ImportPath = Promise<{ default: FC<any> }>

const DynamicRoute = (importPath: () => ImportPath) => {
  const Component = lazy(importPath)

  const DynamicComponent = (props: any) => (
    // @ts-ignore
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  )

  return memo(DynamicComponent)
}

export default DynamicRoute
