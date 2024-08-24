import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger'


export class PaginationDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsPositive()
    @Type( () => Number ) 
    limit?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @Min(0)
    @Type( () => Number ) 
    offset?: number;

}