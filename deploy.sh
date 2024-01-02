# 서버환경 배포 스크립트

env_file=".env"

production_env_vars=(
  "VITE_PRODUCTION_API_BASE_URL=https://stocodi.com/api/v1"
  "VITE_PRODUCTION_COOKIE_NICKNAME=stocodi-nickname"
  "VITE_PRODUCTION_COOKIE_ACCESS=member_access_token"
  "VITE_PRODUCTION_COOKIE_REFRESH=member_refresh_token"
)

if [ ! -e "$env_file" ]; then
  touch "$env_file"
fi

# .env 파일에 환경 변수들 추가 또는 업데이트
for production_env_var in "${production_env_vars[@]}"; do
  env_var_name="${production_env_var%%=*}"
  if grep -q "^$production_env_var=" "$env_file"; then
    sed -i "s|^$env_var_name=.*|$production_env_var|" "$env_file"
  else
    echo "$production_env_var" >> "$env_file"
  fi
  echo "환경 변수가 .env 파일에 추가되었습니다: $production_env_var"
done

sudo docker-compose up -d --build