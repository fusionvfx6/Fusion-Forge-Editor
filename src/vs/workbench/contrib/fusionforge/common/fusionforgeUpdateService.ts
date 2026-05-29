/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { ProxyChannel } from '../../../../base/parts/ipc/common/ipc.js';
import { registerSingleton, InstantiationType } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator } from '../../../../platform/instantiation/common/instantiation.js';
import { IMainProcessService } from '../../../../platform/ipc/common/mainProcessService.js';
import { FusionForgeCheckUpdateResponse } from './voidUpdateServiceTypes.js';



export interface IFusionForgeUpdateService {
	readonly _serviceBrand: undefined;
	check: (explicit: boolean) => Promise<FusionForgeCheckUpdateResponse>;
}


export const IFusionForgeUpdateService = createDecorator<IFusionForgeUpdateService>('FusionForgeUpdateService');


// implemented by calling channel
export class FusionForgeUpdateService implements IFusionForgeUpdateService {

	readonly _serviceBrand: undefined;
	private readonly voidUpdateService: IFusionForgeUpdateService;

	constructor(
		@IMainProcessService mainProcessService: IMainProcessService, // (only usable on client side)
	) {
		// creates an IPC proxy to use metricsMainService.ts
		this.voidUpdateService = ProxyChannel.toService<IFusionForgeUpdateService>(mainProcessService.getChannel('fusionforge-channel-update'));
	}


	// anything transmitted over a channel must be async even if it looks like it doesn't have to be
	check: IFusionForgeUpdateService['check'] = async (explicit) => {
		const res = await this.voidUpdateService.check(explicit)
		return res
	}
}

registerSingleton(IFusionForgeUpdateService, FusionForgeUpdateService, InstantiationType.Eager);


