import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3001/graphql", // NestJS GraphQL 서버 주소
  documents: ["apps/web/**/*.tsx"], // GraphQL 쿼리가 있는 파일들
  generates: {
    "apps/web/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        // 중복 정의 방지를 위한 설정 추가
        dedupeOperationSuffix: true,
        skipTypename: false,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
