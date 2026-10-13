export function canDeleteUser(currentUser, targetUser) {
  if (!currentUser || !targetUser) {
    return false;
  }

  // Only administrators should be allowed to delete another user.
  return currentUser.role !== "guest";
}
