import { Card, CardContent } from "@/components/ui/card";
import cookieIcon from "@/assets/cookie-security-icon.png";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-aihi py-16 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-hero font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              We use cookies to make your browsing experience secure, seamless, and personalized.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <img 
              src={cookieIcon} 
              alt="Cookie security icon" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-section text-foreground leading-relaxed mb-8">
                At AIHI, we respect your privacy and are committed to providing transparency about how we use cookies and similar technologies when you interact with our website. This Cookie Policy explains what cookies are, how we use them, and your choices in managing them.
              </p>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    1. What Are Cookies?
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve performance, and provide a more personalized browsing experience.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    2. How We Use Cookies
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed mb-4">
                    AIHI uses cookies to:
                  </p>
                  <ul className="space-y-3 text-section text-muted-foreground leading-relaxed ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Enhance User Experience:</strong> Remember your preferences and settings for smoother navigation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Analytics & Performance:</strong> Understand how visitors use our website so we can improve content, design, and usability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Security:</strong> Ensure secure browsing and protect against fraudulent activity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Marketing & Personalization:</strong> Deliver relevant content, promotions, and ads tailored to your interests.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    3. Types of Cookies We Use
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                      <p className="text-sm text-muted-foreground">Required for the website to function properly (e.g., login, navigation).</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                      <p className="text-sm text-muted-foreground">Collect anonymous data about usage trends to optimize our site.</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                      <p className="text-sm text-muted-foreground">Remember your preferences (such as language or region).</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Advertising Cookies</h3>
                      <p className="text-sm text-muted-foreground">Help us deliver relevant ads and measure campaign effectiveness.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    4. Managing Your Cookie Preferences
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed mb-4">
                    You have control over cookies. You can:
                  </p>
                  <ul className="space-y-3 text-section text-muted-foreground leading-relaxed ml-6 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Accept or reject non-essential cookies via our website banner.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Adjust your browser settings to block or delete cookies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Withdraw consent for targeted advertising cookies at any time.</span>
                    </li>
                  </ul>
                  <div className="bg-accent p-4 rounded-lg">
                    <p className="text-sm text-accent-foreground">
                      <strong>Note:</strong> Disabling certain cookies may affect site functionality and your browsing experience.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    5. Third-Party Cookies
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed">
                    We may partner with trusted third-party services (e.g., Google Analytics, LinkedIn Insights, advertising platforms) that place cookies on your device to help us understand performance and deliver tailored experiences.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    6. Updates to This Policy
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in law, technology, or our practices. The latest version will always be available on this page with the date of the last update.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    7. Contact Us
                  </h2>
                  <p className="text-section text-muted-foreground leading-relaxed mb-4">
                    If you have questions or concerns about our cookie practices, please reach out to us:
                  </p>
                  <div className="bg-gradient-aihi-subtle p-6 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">📧</span>
                        <a href="mailto:help@aihicloud.com" className="text-primary hover:text-primary/80 transition-colors">
                          help@aihicloud.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">📞</span>
                        <a href="tel:+919876543210" className="text-primary hover:text-primary/80 transition-colors">
                          +91 9876543210
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;