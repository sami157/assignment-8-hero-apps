import React from 'react'

const Footer = () => {
    return (
        <div>
            <div class="bg-black text-white mx-auto grid grid-cols-1 md:grid-cols-3 gap-[160px] p-[80px]">
                <div>
                    <h2 class="text-xl font-semibold mb-4">About</h2>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="#" class="hover:text-white">About Us</a></li>
                        <li><a href="#" class="hover:text-white">Features</a></li>
                        <li><a href="#" class="hover:text-white">Pricing</a></li>
                        <li><a href="#" class="hover:text-white">Blog</a></li>
                        <li><a href="#" class="hover:text-white">Careers</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                    </ul>
                    <p class="mt-4 text-gray-400 text-sm">
                        Our app connects millions worldwide, bringing you powerful tools and seamless experiences that make life simpler, smarter, and more connected.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-4">Support</h2>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="#" class="hover:text-white">Help Center</a></li>
                        <li><a href="#" class="hover:text-white">FAQs</a></li>
                        <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                        <li><a href="#" class="hover:text-white">Report a Problem</a></li>
                        <li><a href="#" class="hover:text-white">Community Forum</a></li>
                    </ul>
                    <p class="mt-4 text-gray-400 text-sm">
                        Have questions? Visit our Help Center or reach out to our support team anytime — we’re here to help you 24/7.
                    </p>
                </div>

                <div>
                    <h2 class="text-xl font-semibold mb-4">Connect</h2>
                    <ul class="space-y-2 text-gray-300">
                        <li>Email: support@yourapp.com</li>
                        <li>Website: <a href="#" class="hover:text-white">www.yourapp.com</a></li>
                        <li>Address: 123 Innovation Street, Tech City</li>
                    </ul>
                    <div class="mt-4 flex space-x-4">
                        <a href="#" class="hover:text-white">Facebook</a>
                        <a href="#" class="hover:text-white">Twitter</a>
                        <a href="#" class="hover:text-white">Instagram</a>
                        <a href="#" class="hover:text-white">LinkedIn</a>
                    </div>
                    <p class="mt-4 text-gray-400 text-sm">
                        Stay updated with our latest news, features, and offers by following us on social media.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
