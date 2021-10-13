import { SpawnSyncOptions, spawnSync } from 'child_process';

export const _deps = {
  spawnSync: (command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptions) => spawnSync(command, args, options),
};
