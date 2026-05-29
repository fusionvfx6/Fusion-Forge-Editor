/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { mountFnGenerator } from '../util/mountFnGenerator.js'
import { FusionForgeCommandBarMain } from './FusionForgeCommandBar.js'
import { FusionForgeSelectionHelperMain } from './FusionForgeSelectionHelper.js'

export const mountFusionForgeCommandBar = mountFnGenerator(FusionForgeCommandBarMain)

export const mountFusionForgeSelectionHelper = mountFnGenerator(FusionForgeSelectionHelperMain)

