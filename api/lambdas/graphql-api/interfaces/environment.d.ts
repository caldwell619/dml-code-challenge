declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'dev' | 'qa' | 'prod' | 'local'
      PARTITION_KEY_NAME: 'groupId'
      RANGE_KEY_NAME: 'individualId'
      TABLE_NAME: string
      IS_LOCAL: string
      GSI_1_NAME_NAME: string
      GSI_1_PARTITION_KEY_NAME: string
      GSI_1_RANGE_KEY_NAME: string
      CORS_URL: string
    }
  }
}

export {}
