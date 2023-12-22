enum EnumRoles{
    ADMIN = 0 ,
     GUEST = 1,
      USER = 2 
}

interface IUserRole { 
    role: EnumRoles
    color: EnumColors

}

const RoleUser: IUserRole = {
    role: EnumRoles.ADMIN,
    color: EnumColors.pink
}

// const enum лучше в плане оптимизации 

const enum EnumColors {
    black,pink,red
}

console.log(EnumRoles.ADMIN)