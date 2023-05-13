// podemos criar contratos, intefaces ou abstract class que vao descrever quais metodos
// os repositorios vao ter
export abstract class MembersRepository {
  abstract createMember(name: string, Memberfunction: string): Promise<void>;
}

// export abstract class MembersRepository {
//   abstract crateMember<MemberInterface>(
//     name: string,
//     Memberfunction: string,
//   ): Promise<MemberInterface>;
// }
