/// <reference path="../pb_data/types.d.ts" />
// ⚠️ DEPRECATED - Use migration 1773423000_fix_is_read_persistence.js instead
// This file is kept for backwards compatibility but does nothing
// to avoid conflicts with duplicate timestamp migrations

migrate((app) => {
  console.log('⚠️ Migration 1773422600_add_is_read_and_status.js: SKIPPED (use 1773423000_fix_is_read_persistence.js)');
  // No operations - handled by newer migration
}, (app) => {
  console.log('Rollback: No changes to revert');
});
