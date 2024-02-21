/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  MetadataDelegateRole,
  findMasterEditionPda,
  findMetadataDelegateRecordPda,
  findMetadataPda,
} from '@metaplex-foundation/mpl-token-metadata';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findCandyMachineAuthorityPda } from '../../hooked';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type SetCollectionV2InstructionAccounts = {
  /** Candy Machine account. */
  candyMachine: PublicKey | Pda;
  /** Candy Machine authority. */
  authority?: Signer;
  /**
   * Authority PDA.
   *
   */

  authorityPda?: PublicKey | Pda;
  /** Payer of the transaction. */
  payer?: Signer;
  /**
   * Update authority of the collection.
   *
   */

  collectionUpdateAuthority: PublicKey | Pda;
  /**
   * Mint account of the collection.
   *
   */

  collectionMint: PublicKey | Pda;
  /**
   * Metadata account of the collection.
   *
   */

  collectionMetadata?: PublicKey | Pda;
  /**
   * Collection authority or metadata delegate record.
   *
   */

  collectionDelegateRecord?: PublicKey | Pda;
  /** Update authority of the new collection NFT. */
  newCollectionUpdateAuthority: Signer;
  /**
   * New collection mint.
   *
   */

  newCollectionMint: PublicKey | Pda;
  /**
   * New collection metadata.
   *
   */

  newCollectionMetadata?: PublicKey | Pda;
  /**
   * New collection master edition.
   *
   */

  newCollectionMasterEdition?: PublicKey | Pda;
  /**
   * New metadata delegate record.
   *
   */

  newCollectionDelegateRecord?: PublicKey | Pda;
  /**
   * Token Metadata program.
   *
   */

  tokenMetadataProgram?: PublicKey | Pda;
  /** System program. */
  systemProgram?: PublicKey | Pda;
  /**
   * Instructions sysvar account.
   *
   */

  sysvarInstructions?: PublicKey | Pda;
  /**
   * Token Authorization Rules program.
   *
   */

  authorizationRulesProgram?: PublicKey | Pda;
  /**
   * Token Authorization rules account for the collection metadata (if any).
   *
   */

  authorizationRules?: PublicKey | Pda;
};

// Data.
export type SetCollectionV2InstructionData = { discriminator: Array<number> };

export type SetCollectionV2InstructionDataArgs = {};

export function getSetCollectionV2InstructionDataSerializer(): Serializer<
  SetCollectionV2InstructionDataArgs,
  SetCollectionV2InstructionData
> {
  return mapSerializer<
    SetCollectionV2InstructionDataArgs,
    any,
    SetCollectionV2InstructionData
  >(
    struct<SetCollectionV2InstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'SetCollectionV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: [229, 35, 61, 91, 15, 14, 99, 160] })
  ) as Serializer<
    SetCollectionV2InstructionDataArgs,
    SetCollectionV2InstructionData
  >;
}

// Instruction.
export function setCollectionV2(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: SetCollectionV2InstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CMACYFENjoBMHzapRXyo1JZkVS6EtaDDzkjMrmQLvr4J'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    candyMachine: {
      index: 0,
      isWritable: true,
      value: input.candyMachine ?? null,
    },
    authority: { index: 1, isWritable: false, value: input.authority ?? null },
    authorityPda: {
      index: 2,
      isWritable: true,
      value: input.authorityPda ?? null,
    },
    payer: { index: 3, isWritable: true, value: input.payer ?? null },
    collectionUpdateAuthority: {
      index: 4,
      isWritable: false,
      value: input.collectionUpdateAuthority ?? null,
    },
    collectionMint: {
      index: 5,
      isWritable: false,
      value: input.collectionMint ?? null,
    },
    collectionMetadata: {
      index: 6,
      isWritable: true,
      value: input.collectionMetadata ?? null,
    },
    collectionDelegateRecord: {
      index: 7,
      isWritable: true,
      value: input.collectionDelegateRecord ?? null,
    },
    newCollectionUpdateAuthority: {
      index: 8,
      isWritable: false,
      value: input.newCollectionUpdateAuthority ?? null,
    },
    newCollectionMint: {
      index: 9,
      isWritable: false,
      value: input.newCollectionMint ?? null,
    },
    newCollectionMetadata: {
      index: 10,
      isWritable: true,
      value: input.newCollectionMetadata ?? null,
    },
    newCollectionMasterEdition: {
      index: 11,
      isWritable: false,
      value: input.newCollectionMasterEdition ?? null,
    },
    newCollectionDelegateRecord: {
      index: 12,
      isWritable: true,
      value: input.newCollectionDelegateRecord ?? null,
    },
    tokenMetadataProgram: {
      index: 13,
      isWritable: false,
      value: input.tokenMetadataProgram ?? null,
    },
    systemProgram: {
      index: 14,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 15,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    authorizationRulesProgram: {
      index: 16,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
    authorizationRules: {
      index: 17,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
  };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
  }
  if (!resolvedAccounts.authorityPda.value) {
    resolvedAccounts.authorityPda.value = findCandyMachineAuthorityPda(
      context,
      { candyMachine: expectPublicKey(resolvedAccounts.candyMachine.value) }
    );
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.collectionMetadata.value) {
    resolvedAccounts.collectionMetadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.collectionMint.value),
    });
  }
  if (!resolvedAccounts.collectionDelegateRecord.value) {
    resolvedAccounts.collectionDelegateRecord.value =
      findMetadataDelegateRecordPda(context, {
        mint: expectPublicKey(resolvedAccounts.collectionMint.value),
        delegateRole: MetadataDelegateRole.Collection,
        updateAuthority: expectPublicKey(
          resolvedAccounts.collectionUpdateAuthority.value
        ),
        delegate: expectPublicKey(resolvedAccounts.authorityPda.value),
      });
  }
  if (!resolvedAccounts.newCollectionMetadata.value) {
    resolvedAccounts.newCollectionMetadata.value = findMetadataPda(context, {
      mint: expectPublicKey(resolvedAccounts.newCollectionMint.value),
    });
  }
  if (!resolvedAccounts.newCollectionMasterEdition.value) {
    resolvedAccounts.newCollectionMasterEdition.value = findMasterEditionPda(
      context,
      { mint: expectPublicKey(resolvedAccounts.newCollectionMint.value) }
    );
  }
  if (!resolvedAccounts.newCollectionDelegateRecord.value) {
    resolvedAccounts.newCollectionDelegateRecord.value =
      findMetadataDelegateRecordPda(context, {
        mint: expectPublicKey(resolvedAccounts.newCollectionMint.value),
        delegateRole: MetadataDelegateRole.Collection,
        updateAuthority: expectPublicKey(
          resolvedAccounts.newCollectionUpdateAuthority.value
        ),
        delegate: expectPublicKey(resolvedAccounts.authorityPda.value),
      });
  }
  if (!resolvedAccounts.tokenMetadataProgram.value) {
    resolvedAccounts.tokenMetadataProgram.value = context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
    resolvedAccounts.tokenMetadataProgram.isWritable = false;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedAccounts.sysvarInstructions.value) {
    resolvedAccounts.sysvarInstructions.value = publicKey(
      'Sysvar1nstructions1111111111111111111111111'
    );
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getSetCollectionV2InstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
