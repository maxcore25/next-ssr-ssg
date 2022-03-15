curl "http://localhost:3000/api/revalidate" \
    -X POST \ 
    -H "Content-Type: application/json" \
    -d "[\"/pokemon/1\"]"