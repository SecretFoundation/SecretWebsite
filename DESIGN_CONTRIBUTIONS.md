# Design

File Format:
Figma

Version Management
Figma Cloud
(Figma)[link]

Setup
The Foundation maintains a figma account used as a central repository of the design files of the website.
In this account, the library contains one current working file and a series of historical files representing the design state of the site at the end of each week.

Weekly Historical files are read only and immutable. The are kept as seperate files (as opposed to pages or layers) as a way of maintaining a true snapshot including assets that may change over time, but without clogging the asset library up with numerous versions of each asset.

Working File
The working file contains layers for each week with comments. All weeks are "locked" except for the previous week and the current working doc. These are kept for quick reference, but not as official snapshots.

Prior Week
The prior week is open for comment during the subsequent week. The community is encouraged to comment on the file as a way of pointing out issues for the design team to fix in the working document.
In addition the prior week file is the file that contains all changes being implemented into the live site that week. 
Finally, it is the document contributors will clone in order to make changes for submission.

Working Document
This is the active working document that is being updated by the design team. This includes bug fixes noted in comments, as well as merges from the prior weeks submissions.

Contributions
Contributors should start by cloning the current prior week document.
Once cloned files can be changed in anyway a designer wants.
Successful submissions will however most likely be ones that follow a few simple guidelines
- One change per submission
  The site is build in a component structure. Components are isolated vue.js files that accept markdown.md content files. As such, to multiple components are way more labor intensive from a coding perspective. In addition the changes in submissions will be based on older weeks design documents makes merging difficult. Limiting the changes to one component at a time makes sorting this all out easier.
  It is thus recommended that the designer isolate the component, modify it in isolation, and submit that component in a seperate file.
- Make submissions if modifying a design aspect of the site
  If you notice a mistake in content of functionality you can open a issue in github or comment on the prior weeks file. Actaully making the change and submitting it will only waist time.
- Follow the Brand Guidlines, unless the change is to the guidlines themselves.
  If you are making a change to a component design, make sure you aren't actually changing a component in the design system like a button, font, or color. If you are changing the such a component it either needs to be modified in the design system, or it is a new artifact intended to be added to the design system. Either is okay, but the hurdle to such changes getting merged is way higher.
- Provide written context in a "context layer". 
  A layer that can be turned on and off is really helpful for the design team to evaluate in context. 
- More?

Submissions
To submit a modification, share your file with the Secret Network Figma account and title it "Submission - Title". The Title should make reference to what is being changed.
Once submitted, be ready to join the next most recent design committee meeting to discuss the change. If you do not, the change will most likely not be taken up until the following week or when you join. Alternatively, you could create an issue request in Github explaining the change and why joining is not possible.
Successful submissions will be merged, unsuccessful may be resubmitted after posting about the unsuccessful change on the forums asking for support. If enough support is achieved they will be reconsidered.
