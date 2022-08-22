import React from 'react';
import {ConfigProvider} from 'antd';
import './App.less';
import {RoutesApp} from "./Core/Routes/Index";
import {AuthProvider} from "./Core/Store/Auth/Contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <ConfigProvider>
                <RoutesApp/>
            </ConfigProvider>
         </AuthProvider>
    );
}

export default App;
