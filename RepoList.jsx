const { useEffect, useState } = React

const reposJsonStatic = {
  data: [
    {
      id: 491991556,
      node_id: "R_kgDOHVMyBA",
      name: "AncientBeast",
      full_name: "BrutchsamaJeanLouis/AncientBeast",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/AncientBeast",
      description: "Turn Based Strategy Game. Master your beasts! 🐺",
      fork: true,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/AncientBeast/deployments",
      created_at: "2022-05-13T17:50:15Z",
      updated_at: "2022-05-08T00:23:25Z",
      pushed_at: "2022-05-15T18:42:42Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/AncientBeast.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/AncientBeast.git",
      clone_url: "https://github.com/BrutchsamaJeanLouis/AncientBeast.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/AncientBeast",
      homepage: "https://AncientBeast.com",
      size: 243397,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "agpl-3.0",
        name: "GNU Affero General Public License v3.0",
        spdx_id: "AGPL-3.0",
        url: "https://api.github.com/licenses/agpl-3.0",
        node_id: "MDc6TGljZW5zZTE=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 308963266,
      node_id: "MDEwOlJlcG9zaXRvcnkzMDg5NjMyNjY=",
      name: "django_project-1",
      full_name: "BrutchsamaJeanLouis/django_project-1",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/django_project-1",
      description: null,
      fork: true,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/django_project-1/deployments",
      created_at: "2020-10-31T20:08:54Z",
      updated_at: "2022-07-11T00:06:50Z",
      pushed_at: "2022-07-11T00:06:34Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/django_project-1.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/django_project-1.git",
      clone_url: "https://github.com/BrutchsamaJeanLouis/django_project-1.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/django_project-1",
      homepage: null,
      size: 30295,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 422925736,
      node_id: "R_kgDOGTVVqA",
      name: "LeetCodePractice",
      full_name: "BrutchsamaJeanLouis/LeetCodePractice",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/LeetCodePractice",
      description: "A library of my personal leetcode solutions",
      fork: false,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/LeetCodePractice/deployments",
      created_at: "2021-10-30T15:57:10Z",
      updated_at: "2021-10-30T15:57:13Z",
      pushed_at: "2021-10-30T15:57:11Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/LeetCodePractice.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/LeetCodePractice.git",
      clone_url: "https://github.com/BrutchsamaJeanLouis/LeetCodePractice.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/LeetCodePractice",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 523323122,
      node_id: "R_kgDOHzFG8g",
      name: "my-portfolio",
      full_name: "BrutchsamaJeanLouis/my-portfolio",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/my-portfolio",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/my-portfolio/deployments",
      created_at: "2022-08-10T11:51:11Z",
      updated_at: "2022-08-10T21:58:49Z",
      pushed_at: "2022-09-22T15:53:24Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/my-portfolio.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/my-portfolio.git",
      clone_url: "https://github.com/BrutchsamaJeanLouis/my-portfolio.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/my-portfolio",
      homepage: null,
      size: 17,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 458668624,
      node_id: "R_kgDOG1a6UA",
      name: "OOP-javascript-game",
      full_name: "BrutchsamaJeanLouis/OOP-javascript-game",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/OOP-javascript-game",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/OOP-javascript-game/deployments",
      created_at: "2022-02-13T00:00:53Z",
      updated_at: "2022-07-09T15:42:49Z",
      pushed_at: "2022-07-10T23:19:29Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/OOP-javascript-game.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/OOP-javascript-game.git",
      clone_url:
        "https://github.com/BrutchsamaJeanLouis/OOP-javascript-game.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/OOP-javascript-game",
      homepage: null,
      size: 7335,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 498762873,
      node_id: "R_kgDOHbqEeQ",
      name: "react-express-ecomerce-website",
      full_name: "BrutchsamaJeanLouis/react-express-ecomerce-website",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url:
        "https://github.com/BrutchsamaJeanLouis/react-express-ecomerce-website",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/react-express-ecomerce-website/deployments",
      created_at: "2022-06-01T14:09:01Z",
      updated_at: "2022-06-03T16:35:31Z",
      pushed_at: "2022-06-28T18:53:11Z",
      git_url:
        "git://github.com/BrutchsamaJeanLouis/react-express-ecomerce-website.git",
      ssh_url:
        "git@github.com:BrutchsamaJeanLouis/react-express-ecomerce-website.git",
      clone_url:
        "https://github.com/BrutchsamaJeanLouis/react-express-ecomerce-website.git",
      svn_url:
        "https://github.com/BrutchsamaJeanLouis/react-express-ecomerce-website",
      homepage: null,
      size: 726,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 491037928,
      node_id: "R_kgDOHUSk6A",
      name: "rysolv",
      full_name: "BrutchsamaJeanLouis/rysolv",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/rysolv",
      description:
        "Code analytics, silly hackathons, and matching developers with great jobs",
      fork: true,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/branches{/branch}",
      tags_url: "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/rysolv/deployments",
      created_at: "2022-05-11T09:13:37Z",
      updated_at: "2022-07-09T15:50:18Z",
      pushed_at: "2022-07-09T16:07:48Z",
      git_url: "git://github.com/BrutchsamaJeanLouis/rysolv.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/rysolv.git",
      clone_url: "https://github.com/BrutchsamaJeanLouis/rysolv.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/rysolv",
      homepage: "https://www.rysolv.com",
      size: 11567,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "agpl-3.0",
        name: "GNU Affero General Public License v3.0",
        spdx_id: "AGPL-3.0",
        url: "https://api.github.com/licenses/agpl-3.0",
        node_id: "MDc6TGljZW5zZTE=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 461569772,
      node_id: "R_kgDOG4L-7A",
      name: "web-components-website",
      full_name: "BrutchsamaJeanLouis/web-components-website",
      private: false,
      owner: {
        login: "BrutchsamaJeanLouis",
        id: 73585384,
        node_id: "MDQ6VXNlcjczNTg1Mzg0",
        avatar_url: "https://avatars.githubusercontent.com/u/73585384?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/BrutchsamaJeanLouis",
        html_url: "https://github.com/BrutchsamaJeanLouis",
        followers_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/followers",
        following_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/following{/other_user}",
        gists_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/subscriptions",
        organizations_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/orgs",
        repos_url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
        events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/BrutchsamaJeanLouis/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/BrutchsamaJeanLouis/web-components-website",
      description: "Website creating using vanillaJS with web components",
      fork: false,
      url: "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website",
      forks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/forks",
      keys_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/teams",
      hooks_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/hooks",
      issue_events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/events",
      assignees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/tags",
      blobs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/languages",
      stargazers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/stargazers",
      contributors_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/contributors",
      subscribers_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/subscribers",
      subscription_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/subscription",
      commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/merges",
      archive_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/downloads",
      issues_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/labels{/name}",
      releases_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/BrutchsamaJeanLouis/web-components-website/deployments",
      created_at: "2022-02-20T17:55:27Z",
      updated_at: "2022-02-20T19:46:38Z",
      pushed_at: "2022-02-20T19:46:35Z",
      git_url:
        "git://github.com/BrutchsamaJeanLouis/web-components-website.git",
      ssh_url: "git@github.com:BrutchsamaJeanLouis/web-components-website.git",
      clone_url:
        "https://github.com/BrutchsamaJeanLouis/web-components-website.git",
      svn_url: "https://github.com/BrutchsamaJeanLouis/web-components-website",
      homepage: null,
      size: 226,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ],
  status: 200,
  statusText: "",
  headers: {
    "cache-control": "public, max-age=60, s-maxage=60",
    "content-type": "application/json; charset=utf-8",
    etag: 'W/"9bd390985a656093598e1ddd59ca7d47a06426678b429b859052c8265c4a6b36"',
    "x-github-media-type": "github.v3",
    "x-github-request-id": "C6F0:103F5:2C36D8:2CDBF3:632F07CC",
    "x-ratelimit-limit": "60",
    "x-ratelimit-remaining": "56",
    "x-ratelimit-reset": "1664030095",
    "x-ratelimit-resource": "core",
    "x-ratelimit-used": "4",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: null },
    headers: { Accept: "application/json, text/plain, */*" },
    username: "BrutchsamaJeanLouis",
    method: "get",
    url: "https://api.github.com/users/BrutchsamaJeanLouis/repos",
  },
  request: {},
};


export default function RepoList () {
  const [githubRepoResponse, setGithubRepoResponse] = useState()

  useEffect(() => {
    // getGitHubProfile()
    setGithubRepoResponse(reposJsonStatic.data.filter(r => r.fork === false))
  }, [])
  
  const getGitHubProfile = () => {
    axios.get(
      'https://api.github.com/users/BrutchsamaJeanLouis/repos', { username: 'BrutchsamaJeanLouis'}, {
        headers: {
          'Accept': 'application/vnd.github+json'
        }
      }).then((res) => {
        // Will use JSON for now as github has request limits
        const myRepos = reposJsonStatic.data.filter(r => r.fork === false)
        console.log('setting my-repos', myRepos)
        setGithubRepoResponse(myRepos)
      })
      .catch((err) => console.log(err.response.data.message))
  }

  if(!githubRepoResponse) {
    return <div>Loading...</div>
  }
  return (
    <div style={{ color: 'white' }}>
      {githubRepoResponse.map((repo, i) => (
        <div key={i}>{repo.name}</div>
      ))}
      </div>
  )
}