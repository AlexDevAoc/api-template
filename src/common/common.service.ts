import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

@Injectable()
export class HandleExceptionsService {
  handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException({
        errorDetail: `${error.detail}`,
        message: 'Registro duplicado',
        code: 404,
      });
    }
    if(error.code == '23503'){
      throw new BadRequestException({
        errorDetail: `${error.detail}`,
        message: 'Registro no encontrado',
        code: 404,
      });
    }

    console.log(error);
    throw new InternalServerErrorException({
      errorDetail: error,
      message: `Hubo un error al crear un nuevo registro - Revisar Logs del servidor`,
      code: 500
    });
  }

  handleNotFoundExceptions(id: any) {
    throw new NotFoundException({
      errorDetail: `Register with id ${id} not found`,
      message: 'Registro no encontrado',
      code: 404
    });
  }

  handleBadRequestExceptions(id: any) {
    throw new BadRequestException(
      `The id value is incorrect ${id} a number is expected`,
    );
  }
}
