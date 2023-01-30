import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  NODE_ENV: string;

  @IsNumber()
  PORT: number;

  @IsNumber()
  REQUEST_RESPONSE_LOGGING: number;

  @IsNumber()
  BFF_API_MOCKS: number;
}

export function validate(config: Record<string, any>): Record<string, any> {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
