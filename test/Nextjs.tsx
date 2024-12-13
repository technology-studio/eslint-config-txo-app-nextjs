/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Copyright: Technology Studio
**/

import React from 'react'
import Image from 'next/image'

// NOTE: Use name of rule for variables or types

// eslint-disable-next-line @next/next/no-img-element -- disabled to validate rule
export const NextNoImgElementError = (): React.JSX.Element => <img src='test' alt='' />
export const NextNoImgElementOk = (): React.JSX.Element => <Image src='test' alt='' />
