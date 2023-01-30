import { registerAs } from '@nestjs/config';

const CONFIG_NAMESPACE = 'env_config';

export const CONFIG_ENV = registerAs(CONFIG_NAMESPACE, () => ({
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  requestResponseLogging: parseInt(process.env.REQUEST_RESPONSE_LOGGING),
  bffApiMocks: parseInt(process.env.BFF_API_MOCKS),
}));
