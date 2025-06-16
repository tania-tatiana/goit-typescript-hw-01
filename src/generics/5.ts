export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRoles = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoles = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
