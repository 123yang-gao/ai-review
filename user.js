export function getUserDisplayName(user) {
  return user.profile.name.trim();
}

export function isAdult(user) {
  return user.age > 18;
}
