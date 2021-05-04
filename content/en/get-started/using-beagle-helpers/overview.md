---
title: Overview
weight: 1
type: overview
description: 'Here you will find a library to help when you want to start a project using beagle for Android. These libs will facilitate the initial Beagle configuration in a project, avoiding some steps, and starting studies quicker.'
---

---

### Libs Available

To start using Beagle right now, you can use the libs below:
- **Beagle-Scaffold:** This lib will hold almost all configurations needed to start using Beagle in your project.
We advise the use of these libs for people that never used Beagle before.

- **Beagle-Defaults:** This lib is advised for more experienced Beagle users and will hold only a few class configurations 
- necessary to use Beagle in an application. These configurations include default HttpClient, Logger and Cache classes.<br>
All these are also available in the Scaffold lib above.

- **Beagle-gRPC:** This library allows you to use Beagle in gRPC applications, converting the JSON contract 
used by Beagle, to proto buffer in gRPC

{{% alert color="warning" %}}
If you wish to use Beagle for an application in production we advise you to [configure a project
 from scratch]({{< ref path="/get-started/creating-a-project-from-scratch/case-android/" lang="en" >}})
{{% /alert %}}
