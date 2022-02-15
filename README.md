# usernamearchivesearcher
A JavaScript bookmark that will search the Wayback Machine and Archive Today for archives of posts by a given username on different social media platforms

To use this script, add a bookmark to your browser and paste the JavaScript code into where it asks for the URL. To run it, select the bookmark, and a prompt will pop up on the screen.

Notes:
When you enter the platform, it is case-sensitive (enter "Twitter", not "twitter" or "TwiTter")
For Archive Today, this tool finds a username (e.g. JohnDoe) and any expansions of it (JohnDoe_1, JohnDoeJr, etc). For the Wayback Machine it only finds the base username. I need to figure out how to fix this. The two sites don't quite use the same syntax for searches.

What info does it show?

Twitter: Existing saves of the user profile and of any tweets made by that user, on the regular and mobile sites.
Gab: Existing saves of the user profile on either the dot com or dot ai versions of the site.
Parler: Existing saves of the user profile using various permutations of how Parler profile urls can be structured.
Telegram: Existing saves of an individual user profile with that username, of posts by a channel with that username, of comments on a channel with that username, of comments in a group with that username.
Zello: Existing saves of the user profile (for Zello only, the username can have spaces in it).
TikTok: Existing saves of the user profile, or (Archive Today only) of specific video posts by the user.
VK: Existing saves of the user profile, or (Archive Today only) of posts by the user.
