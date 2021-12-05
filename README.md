# servieve-as-frontend-developer
주니어 프론트엔드 개발자로 살아남기 

- 면접 및 프론트엔드 기본 지식 

    https://joshua1988.github.io/web-development/interview/frontend-questions/

- 코딩 테스트 준비 

1.  복잡도 (근본)

- 시간 복잡도 : 연산횟수가 10억을 넘어가면 오답 판정을 받을 수 있음

    N의 범위 500 인 경우 : O(N³) 알고리즘을 설계하면 문제를 풀 수 있다.

    N의 범위 2,000 인 경우 : O(N²) 알고리즘을 설계하면 문제를 풀 수 있다.
    
    N의 범위 100,000 인 경우 : O(NlogN) 알고리즘을 설계하면 문제를 풀 수 있다.
    
    N의 범위 10,000,000 인 경우 : O(N) 알고리즘을 설계하면 문제를 풀 수 있다.
    
 
 
- 공간 복잡도 (메모제이션) : 일반적인 경우 데이터의 개수가 1000만 단위가 넘어가지 않도록 해야함 

    *int 자료형의 크기 : 4byte
    
    int a[1000] : 4KB
    
    int a[1000000] : 4MB
    
    int a[2000][2000] : 16MB
    

2. 코딩테스트 기본 

- 입력 받기 : input().split() / map(int,input().split()) (정수형으로 입력받기)

- 입력 값을 리스트에 넣기 : arr = list(map(int,input().split())

- 내장 정렬 함수 : arr.sort() (오름차순) / arr.sort(reverse=True) (내림차순)
   
