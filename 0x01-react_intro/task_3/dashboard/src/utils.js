export function getFullYear() {
	let current_year = new Date().getFullYear();
	return current_year;
}

export function getFooterCopy(isIndex) {
	if (isIndex) {
		return "Holberton School";
	} else {
		return "Holberton School main dashboard";
	}
}

export function getLatestNotification() {
	return '<strong>Urgent requirement</strong> - complete by EOD';
  }
