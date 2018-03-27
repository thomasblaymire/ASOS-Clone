import React from 'react';

import Utility from '../../hoc/Utility';

const layout = (props) => (
  <Utility>
    <main>
        {props.children}
    </main>
  </Utility>

);

export default layout;