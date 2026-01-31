/**
 * Console Override Utility
 * Shows a friendly message in production and preserves logs in development
 */

const initConsole = () => {
	// Only override in production (check for production mode)
	// Store original console log method BEFORE overriding it
	const originalLog = console.log;
	const noop = () => {};

	// Override console methods to suppress logs in production
	console.log = noop;
	console.warn = noop;
	console.error = noop;
	console.info = noop;
	console.debug = noop;

	// Display welcome message using the ORIGINAL log method
	const styles = {
		title:
			"color: #00f0ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00f0ff;",
		message: "color: #a855f7; font-size: 14px; font-weight: normal;",
		link: "color: #ec4899; font-size: 12px; font-weight: normal;",
		emoji: "font-size: 40px;",
	};

	// Use originalLog to bypass the override for this message
	try {
		console.clear(); // Clear existing logs
	} catch (e) {
		// Ignore
	}

	// ASCII Art Smiley
	originalLog("%c😊", styles.emoji);
	originalLog("%c👋 Hi there!", styles.title);
	originalLog("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color: #00f0ff;");
	originalLog("%cLooking for a developer? Let's connect!", styles.message);
	originalLog("%c📧 Email: princepaulose1996@gmail.com", styles.link);
	originalLog("%c💼 LinkedIn: linkedin.com/in/princepaulose1996", styles.link);
};

export default initConsole;
