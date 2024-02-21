/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ClusterFilter,
  Context,
  Program,
  PublicKey,
} from '@metaplex-foundation/umi';
import {
  getMplCandyGuardErrorFromCode,
  getMplCandyGuardErrorFromName,
} from '../errors';

export const MPL_CANDY_GUARD_PROGRAM_ID =
  'CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ' as PublicKey<'CMAGAKJ67e9hRZgfC5SFTbZH8MgEmtqazKXjmkaJjWTJ'>;

export function createMplCandyGuardProgram(): Program {
  return {
    name: 'mplCandyGuard',
    publicKey: MPL_CANDY_GUARD_PROGRAM_ID,
    getErrorFromCode(code: number, cause?: Error) {
      return getMplCandyGuardErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getMplCandyGuardErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}

export function getMplCandyGuardProgram<T extends Program = Program>(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): T {
  return context.programs.get<T>('mplCandyGuard', clusterFilter);
}

export function getMplCandyGuardProgramId(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): PublicKey {
  return context.programs.getPublicKey(
    'mplCandyGuard',
    MPL_CANDY_GUARD_PROGRAM_ID,
    clusterFilter
  );
}
