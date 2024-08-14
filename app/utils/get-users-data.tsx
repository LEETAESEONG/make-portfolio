export default function GetUsersData() {
  fetch("https://api.github.com/users/LEETAESEONG")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // 사용자 정보(JSON)를 콘솔에 출력합니다.
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  /*
  async function getTotalCommits(username) {
    let totalCommits = 0;
    let page = 1;
    const perPage = 100; // GitHub API는 페이지당 최대 100개의 항목을 반환합니다.

    while (true) {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
        const repositories = await response.json();

        if (repositories.length === 0) {
            break; // 더 이상 리포지토리가 없으면 반복 종료
        }

        for (const repo of repositories) {
            const commitsResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=1`);
            const commits = commitsResponse.headers.get('link');

            if (commits) {
                const lastPageMatch = commits.match(/&page=(\d+)>; rel="last"/);
                if (lastPageMatch) {
                    totalCommits += parseInt(lastPageMatch[1], 10);
                }
            } else {
                // 커밋이 1개만 있는 경우를 처리
                totalCommits += 1;
            }
        }

        page++;
    }

    return totalCommits;
}

// 사용 예제
getTotalCommits('LEETAESEONG').then(totalCommits => {
    console.log(`Total commits by LEETAESEONG: ${totalCommits}`);
}).catch(error => {
    console.error('Error fetching commits:', error);
});

  
  
  */
}
