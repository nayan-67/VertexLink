<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Verify Your Email - SkillPath AI</title>
    <style>
        /* Mobile-first responsive styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
                border-radius: 0 !important;
            }

            .mobile-padding {
                padding-left: 20px !important;
                padding-right: 20px !important;
            }

            .mobile-header-padding {
                padding: 30px 20px !important;
            }

            .mobile-content-padding {
                padding: 30px 20px !important;
            }

            .mobile-footer-padding {
                padding: 25px 20px !important;
            }

            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }

            .mobile-title {
                font-size: 20px !important;
                line-height: 1.3 !important;
            }

            .mobile-subtitle {
                font-size: 24px !important;
            }

            .mobile-otp-code {
                font-size: 28px !important;
                padding: 16px 24px !important;
                letter-spacing: 4px !important;
            }

            .mobile-logo {
                /* width: 50px !important;
                height: 50px !important; */
                height: 40px !important;
            }

            .mobile-logo-text {
                font-size: 20px !important;
            }

            .mobile-feature-box {
                padding: 20px !important;
                margin-bottom: 20px !important;
            }

            .mobile-social {
                padding: 0 4px !important;
            }

            .mobile-footer-text {
                font-size: 11px !important;
            }

            /* .mobile-hide {
                display: none !important;
            }
             */
            /* .mobile-stack {
                display: block !important;
                width: 100% !important;
            } */
        }

        @media only screen and (max-width: 480px) {
            .email-container {
                width: 100% !important;
            }

            .mobile-padding {
                padding-left: 15px !important;
                padding-right: 15px !important;
            }

            .mobile-header-padding {
                padding: 25px 15px !important;
            }

            .mobile-content-padding {
                padding: 25px 15px !important;
            }

            .mobile-footer-padding {
                padding: 20px 15px !important;
            }

            .mobile-title {
                font-size: 18px !important;
            }

            .mobile-subtitle {
                font-size: 22px !important;
            }

            .mobile-otp-code {
                font-size: 24px !important;
                padding: 14px 20px !important;
                letter-spacing: 3px !important;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #12182a !important;
            }

            .logo-background {
                background-color: #12182a !important;
                border-bottom: 1px solid #374151 !important;
            }

            .lock-icon {
                background: linear-gradient(135deg, #3b82f6 0%, #8b21f1 100%) !important;
            }

            .cf-email {
                color: #447df7 !important;
            }

            .dark-text {
                color: #f9fafb !important;
            }

            .dark-secondary {
                color: #d1d5db !important;
            }
        }

        /* Outlook specific fixes */
        .outlook-fix {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
    </style>
</head>

<body
    style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif; line-height: 1.6; color: #374151; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <!-- Wrapper Table -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="margin: 0; padding: 0; background-color: #f3f4f6;" class="outlook-fix">
        <tr>
            <td style="padding: 20px 10px;" class="mobile-padding">
                <!-- Main Container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                    style="margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden; max-width: 600px;"
                    class="email-container outlook-fix">

                    <!-- Header Section -->
                    <tr>
                        <td style="background: #eff3fe; padding: 20px 20px; text-align: center;"
                            class="mobile-header-padding logo-background">
                            <!-- Logo Placeholder -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                class="outlook-fix">
                                <tr>
                                    <td style="text-align: center;">
                                        <!--  Logo Placeholder -->
                                        {{-- <img src="{{ $message->embed(public_path('assets/logo.png')) }}"
                                            alt="SkillPath AI" height="50" style="display: block; margin: 0 auto;"
                                            class="mobile-logo"> --}}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content Section -->
                    <tr>
                        <td style="padding: 40px 30px;" class="mobile-content-padding">
                            <!-- Verification Message -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                class="outlook-fix">
                                <tr>
                                    <td style="text-align: center;">
                                        <!-- Security Icon -->
                                        {{-- <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #2d5cf2 0%, #8b21f1 100%); border-radius: 50%; margin: 0 auto 24px auto; display: flex; align-items: center; justify-content: center;"
                                            class="lock-icon">
                                            <div style="color: #ffffff; font-size: 36px; margin:auto auto">🔐</div>
                                        </div> --}}

                                        <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 24px; font-weight: 600; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif; line-height: 1.3;"
                                            class="mobile-title dark-text">
                                            {{ $title ?? 'Verify Your Email Address' }}
                                        </h2>

                                        <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 16px; line-height: 1.6; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                            class="mobile-text">
                                            Hello {{ $user ?? 'User' }},
                                        </p>

                                        <p style="margin: 0 0 32px 0; color: #6b7280; font-size: 16px; line-height: 1.6; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                            class="mobile-text">
                                            please use the verification code below. This code will expire in <strong>2
                                                minutes</strong> for your security.
                                        </p>

                                        <!-- OTP Code Box -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                            style="margin: 0 auto 32px auto;" class="outlook-fix">
                                            <tr>
                                                <td style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border: 2px dashed #4f46e5; border-radius: 12px; padding: 24px 32px; text-align: center;"
                                                    class="mobile-feature-box">
                                                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 500; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif; text-transform: uppercase; letter-spacing: 1px;"
                                                        class="mobile-text">
                                                        Your Verification Code
                                                    </p>
                                                    <div style="font-family: 'Courier New', monospace; font-size: 36px; font-weight: 700; color: #4f46e5; letter-spacing: 6px; margin: 8px 0;"
                                                        class="mobile-otp-code">
                                                        {{ $otp ?? '123456' }}
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Security Notice -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                            width="100%" style="margin-bottom: 32px;" class="outlook-fix">
                                            <tr>
                                                <td style="padding: 20px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;"
                                                    class="mobile-feature-box">
                                                    <table role="presentation" cellspacing="0" cellpadding="0"
                                                        border="0" width="100%" class="outlook-fix">
                                                        <tr>
                                                            <td style="text-align: center;">
                                                                <div
                                                                    style="color: #f59e0b; font-size: 24px; margin-bottom: 8px;">
                                                                    ⚠️</div>
                                                                <h3 style="margin: 0 0 8px 0; color: #92400e; font-size: 16px; font-weight: 600; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                                                    class="mobile-text">
                                                                    Security Notice
                                                                </h3>
                                                                <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                                                    class="mobile-text">
                                                                    If you didn't request this verification code, please
                                                                    ignore this email. Never share this code with
                                                                    anyone.
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Support Message -->
                                        <p style="margin: 0; color: #9ca3af; font-size: 14px; line-height: 1.5; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                            class="mobile-text">
                                            Need help? Contact our support team at
                                            <a href="/cdn-cgi/l/email-protection#3249491216414742425d4046775f535b5e120d0d1215414742425d40467241595b5e5e4253465a535b1c515d5f15124f4f"
                                                style="color: #4f46e5; text-decoration: none;"
                                                class="cf-email">{{ $supportEmail ?? 'support@example.com' }}</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Divider -->
                    <tr>
                        <td style="padding: 0 30px;" class="mobile-padding">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                class="outlook-fix">
                                <tr>
                                    <td style="border-top: 1px solid #e5e7eb;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer Section -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center;"
                            class="mobile-footer-padding">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                width="100%" class="outlook-fix">
                                <tr>
                                    <td style="text-align: center;">
                                        <!-- Social Links -->
                                        {{-- <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                            style="margin: 0 auto 20px auto;" class="outlook-fix">
                                            <tr>
                                                <td style="padding: 0 8px;" class="mobile-social">
                                                    <a href="{{ $socialLinks['twitter'] ?? '#' }}"
                                                        style="color: #6b7280; text-decoration: none; font-size: 18px; display: inline-block; width: 32px; height: 32px; background-color: #e5e7eb; border-radius: 50%; line-height: 32px; text-align: center;">📱</a>
                                                </td>
                                                <td style="padding: 0 8px;" class="mobile-social">
                                                    <a href="{{ $socialLinks['linkedin'] ?? '#' }}"
                                                        style="color: #6b7280; text-decoration: none; font-size: 18px; display: inline-block; width: 32px; height: 32px; background-color: #e5e7eb; border-radius: 50%; line-height: 32px; text-align: center;">💼</a>
                                                </td>
                                                <td style="padding: 0 8px;" class="mobile-social">
                                                    <a href="{{ $socialLinks['facebook'] ?? '#' }}"
                                                        style="color: #6b7280; text-decoration: none; font-size: 18px; display: inline-block; width: 32px; height: 32px; background-color: #e5e7eb; border-radius: 50%; line-height: 32px; text-align: center;">👥</a>
                                                </td>
                                                <td style="padding: 0 8px;" class="mobile-social">
                                                    <a href="{{ $socialLinks['instagram'] ?? '#' }}"
                                                        style="color: #6b7280; text-decoration: none; font-size: 18px; display: inline-block; width: 32px; height: 32px; background-color: #e5e7eb; border-radius: 50%; line-height: 32px; text-align: center;">📸</a>
                                                </td>
                                            </tr>
                                        </table> --}}

                                        <!-- Company Info -->
                                        {{-- <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; font-weight: 600; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                            class="mobile-text">
                                            SkillPath AI
                                        </p> --}}

                                        <!-- Footer Links -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                                            style="margin: 0 auto;" class="outlook-fix mobile-stack">
                                            <tr class="mobile-stack">
                                                <td style="padding: 0 8px;" class="mobile-stack">
                                                    <a href="{{ $privacyUrl ?? '#' }}"
                                                        style="color: #4f46e5; text-decoration: none; font-size: 12px; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                                        class="mobile-footer-text">Privacy Policy</a>
                                                </td>
                                                <td style="color: #d1d5db; font-size: 12px;" class="mobile-hide">|
                                                </td>
                                                <td style="padding: 0 8px;" class="mobile-stack">
                                                    <a href="{{ $termsUrl ?? '#' }}"
                                                        style="color: #4f46e5; text-decoration: none; font-size: 12px; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                                        class="mobile-footer-text">Terms of Service</a>
                                                </td>
                                                <td style="color: #d1d5db; font-size: 12px;" class="mobile-hide">|
                                                </td>
                                                <td style="padding: 0 8px;" class="mobile-stack">
                                                    <a href="{{ $unsubscribeUrl ?? '#' }}"
                                                        style="color: #6b7280; text-decoration: none; font-size: 12px; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                                        class="mobile-footer-text">Unsubscribe</a>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Copyright -->
                                        <p style="margin: 16px 0 0 0; color: #9ca3af; font-size: 12px; font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;"
                                            class="mobile-footer-text">
                                            © 2025 SkillPath AI. All rights reserved.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>

</html>
