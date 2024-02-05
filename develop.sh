
start=`date +%s.%N`

# run something...
sudo docker-compose up -d --build

finish=`date +%s.%N`
diff=$( echo "$finish - $start" | bc -l )

echo 'start:' $start
echo 'finish:' $finish
echo 'diff:' $diff