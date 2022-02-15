javascript:
q = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); 
	if (!q) q = prompt("Enter a platform", ""); 
	handlestr = "Please enter a " + q + " handle";
	if (q=="Twitter") { 
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://twitter.com/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://twitter.com/" + escape(r).replace(/ /g, "+") + "*";
			urlWBm="https://web.archive.org/web/*/https://mobile.twitter.com/" + escape(r).replace(/ /g, "+") + "/*";
			urlATm="https://archive.fo/https://mobile.twitter.com/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
			window.open(urlWBm, "_blank");
			window.open(urlATm, "_blank");
		}
	}
	else if(q=="Gab") {
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://gab.com/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://gab.com/" + escape(r).replace(/ /g, "+") + "*";
			urlWBold="https://web.archive.org/web/*/https://gab.ai/" + escape(r).replace(/ /g, "+") + "/*";
			urlATold="https://archive.fo/https://gab.ai/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
			window.open(urlWBold, "_blank");
			window.open(urlATold, "_blank");
		}
			
	}
	else if (q=="Parler") { 
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://parler.com/user/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://parler.com/user/" + escape(r).replace(/ /g, "+") + "*";
			urlATht="https://archive.fo/https://parler.com/#/user/" + escape(r).replace(/ /g, "+") + "*";
			urlATp="https://archive.fo/https://parler.com/profile/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
			window.open(urlATht, "_blank");
			window.open(urlATp, "_blank");
		} 
	}
	else if (q=="Telegram") { 
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://t.me/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://t.me/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
		} 
	}
	else if (q=="Zello") {
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://zello.com/users/s?name=" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://zello.com/users/s?name=" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
		}
	}
	else if (q=="TikTok") { 
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://tiktok.com/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://tiktok.com/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
		}
	}
	else if (q=="VK") { 
		r = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
		if (!r) r = prompt(handlestr);
		if (r != null) {
			urlWB="https://web.archive.org/web/*/https://vk.com/" + escape(r).replace(/ /g, "+") + "/*";
			urlAT="https://archive.fo/https://vk.com/" + escape(r).replace(/ /g, "+") + "*";
			window.open(urlWB, "_blank");
			window.open(urlAT, "_blank");
		}
	}; void 0