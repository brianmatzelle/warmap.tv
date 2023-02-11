#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream input_file ("ukr_border.txt");
    std::ofstream output_file ("my_border.txt");
    std::string line;
    if (input_file.is_open()) {
        while (input_file) {
            std::getline(input_file, line);
            output_file << line << "\n";
        }
    }
    output_file.close();

    
}