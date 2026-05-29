import { URI } from '../../../../base/common/uri.js';

export type FusionForgeDirectoryItem = {
	uri: URI;
	name: string;
	isSymbolicLink: boolean;
	children: FusionForgeDirectoryItem[] | null;
	isDirectory: boolean;
	isGitIgnoredDirectory: false | { numChildren: number }; // if directory is gitignored, we ignore children
}
