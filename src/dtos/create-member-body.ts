import { IsNotEmpty, Length } from 'class-validator';

export class CreateMemberBody {
  @IsNotEmpty({
    message: 'Name is required',
  })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({
    message: 'Function is required',
  })
  function: string;
}
