/**
 * Console Override Utility
 * Shows a friendly message in production and preserves logs in development
 */

const initConsole = () => {
  // Only override in production (check for production mode)
  if (import.meta.env.MODE === 'production') {
    // Store original console methods
    const noop = () => {};
    
    // Override console methods to suppress logs in production
    window.console.log = noop;
    window.console.warn = noop;
    window.console.error = noop;
    window.console.info = noop;
    window.console.debug = noop;

    // Display welcome message
    const styles = {
      title: 'color: #00f0ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00f0ff;',
      message: 'color: #a855f7; font-size: 14px; font-weight: normal;',
      link: 'color: #ec4899; font-size: 12px; font-weight: normal;',
      emoji: 'font-size: 40px;'
    };

    console.clear();
    
    // ASCII Art Smiley
    console.log('%c😊', styles.emoji);
    console.log('%c👋 Hi there!', styles.title);
    console.log('%cWelcome to Prince Paulose\'s Portfolio', styles.message);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00f0ff;');
    console.log('%cLooking for a developer? Let\'s connect!', styles.message);
    console.log('%c📧 Email: princepaulose1996@gmail.com', styles.link);
    console.log('%c💼 LinkedIn: linkedin.com/in/princepaulose1996', styles.link);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00f0ff;');
    console.log('%c💡 Tip: Check the Network tab to see the magic! ✨', 'color: #84cc16; font-size: 12px;');
  } else {
    // Development mode - show helpful message
    console.log(
      '%c🛠️ Development Mode',
      'color: #84cc16; font-size: 16px; font-weight: bold; background: #1e293b; padding: 8px 12px; border-radius: 4px;'
    );
    console.log(
      '%cAll console logs are enabled for debugging',
      'color: #94a3b8; font-size: 12px;'
    );
  }
};

export default initConsole;
