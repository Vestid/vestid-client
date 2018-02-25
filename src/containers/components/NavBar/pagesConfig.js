import React from 'react'
import * as routes from '../../../routing/routesConstant'
import {primaryblue} from '../../../styles/colors_'

export const pagesConfig = [
    {page: 'Home', to: routes.homeRoot, activeStyle: {borderBottom: `3px solid ${primaryblue}`}},
    {page: 'About', to: routes.about, activeStyle: {borderBottom: `3px solid ${primaryblue}`}},
    {page: <h1><span>V</span>estid</h1>, to: routes.homeRoot},
    {page: 'Why?', to: routes.why, activeStyle: {borderBottom: `3px solid ${primaryblue}`}},
    {page: 'Login', to: routes.login, activeStyle: {borderBottom: `3px solid ${primaryblue}`}}
]
