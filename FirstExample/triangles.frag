#version 430 core

in vec3 colour;
in vec2 texCoord;

out vec4 frag_colour;

uniform sampler2D texture0;

void main()
{
	//frag_colour = vec4(colour, 1.0);
	//frag_colour = texture(texture0, texCoord);
	frag_colour = vec4(1.f, 0.f, 0.f, 1.f);
}