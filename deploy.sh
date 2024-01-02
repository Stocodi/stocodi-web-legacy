env_file=".env"

# 추가할 환경 변수 및 값 설정
new_env_var="VITE_PRODUCTION_API_BASE_URL = https://stocodi.com/api/v1"

# .env 파일이 존재하는지 확인하고 없으면 생성
if [ ! -e "$env_file" ]; then
  touch "$env_file"
fi

# .env 파일에 환경 변수 추가 또는 업데이트
if grep -q "VITE_PRODUCTION_API_BASE_URL" "$env_file"; then
  sed -i "s|^VITE_PRODUCTION_API_BASE_URL=.*|$new_env_var|" "$env_file"
else
  echo "$new_env_var" >> "$env_file"
fi

echo "환경 변수가 .env 파일에 추가되었습니다: $new_env_var"


sudo docker-compose up -d --build