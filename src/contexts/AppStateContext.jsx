import React from "react";

// context는 React component tree안에서 gloval데이터를 공유할 수 있도록 해줌
// props를 넘겨주지 않고도 component tree 전체에 데이터를 제공할 수 있다.
const AppStateContext = React.createContext();

export default AppStateContext;
