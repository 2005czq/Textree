#include <iostream>
#include <string>
#include <vector>

#define tabs(n) std::string((n), '\t')

int main() {
    std::cout << "$$\n";
    std::string s;
    int nowlayer = 0;

    while (std::getline(std::cin, s)) {
        size_t first_char_pos = s.find_first_not_of('\t');
        int layer = (first_char_pos == std::string::npos) ? 0 : first_char_pos;
        std::string content = (first_char_pos == std::string::npos) ? "" : s.substr(first_char_pos);
        
        if (content.empty()) continue;

        if (nowlayer == layer) {
            if (nowlayer != 0) std::cout << "\\\\\n" << tabs(layer) << "&";
            std::cout << content;
        }
        if (nowlayer < layer) {
            std::cout << "\n" << tabs(nowlayer);
            std::cout << "\\left\\{\\begin{aligned}\n" << tabs(layer) << "&" << content;
        }
        if (nowlayer > layer) {
            while (nowlayer > layer) {
                std::cout << "\\\\\n" << tabs(nowlayer - 1) << "\\end{aligned}\\right.";
                nowlayer--;
            }
            if (layer != 0) std::cout << "\\\\\n" << tabs(layer) << "&" << content;
            else std::cout << content;
        }
        nowlayer = layer;
    }

    while (nowlayer > 0) {
        std::cout << "\\\\\n" << tabs(nowlayer - 1) << "\\end{aligned}\\right.";
        nowlayer--;
    }

    std::cout << "\n$$" << std::endl;

    return 0;
}