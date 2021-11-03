import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();
    React.useEffect(() => {
      if(dependencies[0]>0){
        renderChartFn(d3.select(ref.current));}
        return () => {};
      }, [renderChartFn],[dependencies]);
    return ref;
}