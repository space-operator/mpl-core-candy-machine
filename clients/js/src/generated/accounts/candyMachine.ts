/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  array,
  publicKey as publicKeySerializer,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  CandyMachineAccountData,
  getCandyMachineAccountDataSerializer,
} from '../../hooked';
import {
  AccountVersionArgs,
  CandyMachineDataArgs,
  getAccountVersionSerializer,
  getCandyMachineDataSerializer,
} from '../types';

/** Candy machine state and config data. */
export type CandyMachine = Account<CandyMachineAccountData>;

export function deserializeCandyMachine(rawAccount: RpcAccount): CandyMachine {
  return deserializeAccount(rawAccount, getCandyMachineAccountDataSerializer());
}

export async function fetchCandyMachine(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CandyMachine> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'CandyMachine');
  return deserializeCandyMachine(maybeAccount);
}

export async function safeFetchCandyMachine(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<CandyMachine | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeCandyMachine(maybeAccount) : null;
}

export async function fetchAllCandyMachine(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CandyMachine[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'CandyMachine');
    return deserializeCandyMachine(maybeAccount);
  });
}

export async function safeFetchAllCandyMachine(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<CandyMachine[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => deserializeCandyMachine(maybeAccount as RpcAccount));
}

export function getCandyMachineGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CMACYFENjoBMHzapRXyo1JZkVS6EtaDDzkjMrmQLvr4J'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      discriminator: Array<number>;
      version: AccountVersionArgs;
      features: Array<number>;
      authority: PublicKey;
      mintAuthority: PublicKey;
      collection: PublicKey;
      itemsRedeemed: number | bigint;
      data: CandyMachineDataArgs;
    }>({
      discriminator: [0, array(u8(), { size: 8 })],
      version: [8, getAccountVersionSerializer()],
      features: [9, array(u8(), { size: 6 })],
      authority: [15, publicKeySerializer()],
      mintAuthority: [47, publicKeySerializer()],
      collection: [79, publicKeySerializer()],
      itemsRedeemed: [111, u64()],
      data: [119, getCandyMachineDataSerializer()],
    })
    .deserializeUsing<CandyMachine>((account) =>
      deserializeCandyMachine(account)
    )
    .whereField('discriminator', [51, 173, 177, 113, 25, 241, 109, 189]);
}
